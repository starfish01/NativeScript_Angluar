import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Challenge } from "./challenge.model";
import { DayStatus, Day } from "./day.model";
import { take, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class ChallengeService {
    private _currentChallenge = new BehaviorSubject<Challenge>(null);

    constructor(private http: HttpClient) {}

    get currentChallenge() {
        return this._currentChallenge.asObservable();
    }

    createNewChallenge(title: string, description: string) {
        const newChallenge = new Challenge(
            title,
            description,
            new Date().getFullYear(),
            new Date().getMonth()
        );

        this.saveToServer(newChallenge);

        this._currentChallenge.next(newChallenge);
    }

    updateChallenge(title: string, description: string) {
        this._currentChallenge.pipe(take(1)).subscribe(challenge => {
            const updateChallenge = new Challenge(
                title,
                description,
                challenge.year,
                challenge.month,
                challenge.days
            );
            this.saveToServer(updateChallenge);
            this._currentChallenge.next(updateChallenge);
        });
    }

    updateDayStatus(dayInMonth: number, status: DayStatus) {
        this._currentChallenge
            .pipe(take(1))
            .subscribe((challenge: Challenge) => {
                if (!challenge || challenge.days.length < dayInMonth) {
                    return;
                }
                const dayIndex = challenge.days.findIndex(
                    d => d.dayInMonth === dayInMonth
                );
                challenge.days[dayIndex].status = status;
                this.saveToServer(challenge);
                this._currentChallenge.next(challenge);
            });
    }

    fetchCurrentChallenge() {
        return this.http
            .get<{
                title: string;
                description: string;
                month: number;
                year: number;
                _days: Day[];
            }>(
                "https://nativescript-angular-cou-a2515.firebaseio.com/challenge.json"
            )
            .pipe(
                tap(responseData => {
                    if (responseData) {
                        const loadedChallenge = new Challenge(
                            responseData.title,
                            responseData.description,
                            responseData.month,
                            responseData.year,
                            responseData._days
                        );
                        this._currentChallenge.next(loadedChallenge);
                    }
                })
            );
    }

    private saveToServer(challengeToSave: Challenge) {
        this.http
        .put(
            "https://nativescript-angular-cou-a2515.firebaseio.com/challenge.json",
            challengeToSave
        )
        .subscribe(res => {
            console.log(res);
        });
    }
}
