import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Player } from "../models/player";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const players = [
      { id: 1, name: "Nathan Armour", team_id: 1 },
      { id: 2, name: "Luiz Astorga", team_id: 1 },
      { id: 3, name: "Emmanual Bilolo", team_id: 1 },
      { id: 4, name: "Eric Chen", team_id: 1 },
      { id: 5, name: "Christian Cortes", team_id: 1 },
      { id: 6, name: "Jason Dick", team_id: 1 },
      { id: 7, name: "Cristopher Fogel", team_id: 1 },
      { id: 8, name: "Steven Gomez", team_id: 1 },
      { id: 9, name: "Colton Green", team_id: 1 },
      { id: 10, name: "Alvaro (Noe) Guzman", team_id: 1 },
      { id: 11, name: "Logan Harless", team_id: 1 },
      { id: 12, name: "Alexander Ho", team_id: 1 },
      { id: 13, name: "Tristan Ho", team_id: 1 },
      { id: 14, name: "Brian Honea", team_id: 1 },
      { id: 15, name: "Julius Hubby", team_id: 1 },
      { id: 16, name: "Jason Hustad", team_id: 1 },
      { id: 17, name: "Tyler Hustad", team_id: 1 },
      { id: 18, name: "Eric Kleckner", team_id: 1 },
      { id: 19, name: "Victor Mao", team_id: 1 },
      { id: 20, name: "Wesley Miaw", team_id: 1 },
      { id: 21, name: "Nand Patel", team_id: 1 },
      { id: 22, name: "Benny Rubanov", team_id: 1 },
      { id: 23, name: "Daniel Urrutia", team_id: 1 },
      { id: 23, name: "Daniel Urrutia", team_id: 1 },
      { id: 23, name: "Jonathan Brandt", team_id: 2 },
      { id: 24, name: "Neel Moni", team_id: 2 },
      { id: 25, name: "Timothy Champion", team_id: 2 },
      { id: 26, name: "Nik Vadodaria", team_id: 2 },
      { id: 27, name: "John Novosel", team_id: 2 },
      { id: 28, name: "Naved Yekanizaree", team_id: 2 },
      { id: 29, name: "Craig Hilby", team_id: 2 },
      { id: 30, name: "Michael Chen", team_id: 2 },
      { id: 31, name: "Kumar Kudumula", team_id: 2 },
      { id: 32, name: "Victor Lopez", team_id: 2 },
      { id: 33, name: "Ciro Randazzo", team_id: 2 },
      { id: 34, name: "Dylan Nguyen", team_id: 2 },
      { id: 35, name: "Chaithu Dikkala", team_id: 2 },
      { id: 36, name: "Anh Nguyen", team_id: 2 },
      { id: 37, name: "Sanjay Srikanth", team_id: 2 },
      { id: 38, name: "Michael McCall", team_id: 2 },
      { id: 39, name: "Kyle Tupper", team_id: 2 },
      { id: 40, name: "William Benson", team_id: 2 },
      { id: 41, name: "Michael Goldenstein", team_id: 2 },
      { id: 42, name: "Brandon Sike", team_id: 2 },
      { id: 43, name: "Brendan Paul", team_id: 2 },
      { id: 44, name: "Tandav Argula", team_id: 2 },
      { id: 45, name: "Ben Morrison", team_id: 2 },
      { id: 46, name: "Kaustub Nair", team_id: 2 },
      { id: 47, name: "David Piersall", team_id: 2 },
      { id: 48, name: "William Payne", team_id: 2 },
      { id: 49, name: "Caleb Trotter", team_id: 2 },
      { id: 50, name: "Elissa Balke", team_id: 3 },
      { id: 51, name: "Anne Chan", team_id: 3 },
      { id: 52, name: "Allison Chang", team_id: 3 },
      { id: 53, name: "Rebecca Chase", team_id: 3 },
      { id: 54, name: "Ashley Gi", team_id: 3 },
      { id: 55, name: "Jennifer Good", team_id: 3 },
      { id: 56, name: "Elizabeth Higgins", team_id: 3 },
      { id: 57, name: "Negin Khakpour", team_id: 3 },
      { id: 58, name: "Julia Mihail", team_id: 3 },
      { id: 59, name: "Jennifer Nguyen", team_id: 3 },
      { id: 60, name: "Dom O'Neill", team_id: 3 },
      { id: 61, name: "Sofia Sacco", team_id: 3 },
      { id: 62, name: "Nupur Sampat", team_id: 3 },
      { id: 63, name: "Shruthi Subramanium", team_id: 3 },
      { id: 64, name: "Brianne McLemore", team_id: 3 },
      { id: 65, name: "LeAnn Le", team_id: 3 },
      { id: 66, name: "Corrina Spurlin", team_id: 3 },
      { id: 67, name: "Madison Nickerson", team_id: 3 },
      { id: 68, name: "Camille Gerstner", team_id: 3 },
      { id: 69, name: "Jamie Eriksson", team_id: 3 },
      { id: 70, name: "Kylee Glenn", team_id: 3 },
      { id: 71, name: "Celeste Bilolo", team_id: 3 },
      { id: 72, name: "Emma Bronnenberg", team_id: 3 },
      { id: 73, name: "Olivia Osborne", team_id: 3 },
      { id: 74, name: "Jacqueline Pham", team_id: 3 },
      { id: 75, name: "Olivia Bonin", team_id: 3 },
      { id: 76, name: "Bristol Lovoy", team_id: 3 },
    ];
    const teams = [
      { id: 1, name: "WOOF-A" },
      { id: 2, name: "WOOF-B" },
      { id: 3, name: "Whiplash" },
    ];
    return { players, teams };
  }

  // Overrides the genId method to ensure that a player always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (1).
  // if the heroes array is not empty, the method below returns the highest
  // player id + 1.

  genId(players: Player[]): number {
    return players.length > 0
      ? Math.max(...players.map((player) => player.id)) + 1
      : 1;
  }
}
