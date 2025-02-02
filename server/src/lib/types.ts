import { Base } from "@typegoose/typegoose/lib/defaultClasses";
import mongoose from "mongoose";

// QUESTION TYPES
export enum QuestionType {
  MULTIPLE_CHOICE,
  MULTIPLE_ANSWER,
  ESSAY,
}

export type TQuestion =
  | {
      type: QuestionType.MULTIPLE_CHOICE;
      question: string;
      answer: number;
      duration?: number;
    }
  | {
      type: QuestionType.MULTIPLE_ANSWER;
      question: string;
      answer: number[];
      duration?: number;
    }
  | {
      type: QuestionType.ESSAY;
      question: string;
      answer: string;
      duration?: number;
    };

export interface IStudent extends Base {
  username: string;
  score: number;
  accuracy: number;
}
