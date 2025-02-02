import { prop, getModelForClass, Ref } from "@typegoose/typegoose";
import { TQuiz } from "./Quiz";

export class TUser {
  @prop()
  userId!: BigInt;

  @prop(() => TQuiz)
  public quizzes?: Ref<TQuiz>[];
}

const User = getModelForClass(TUser);

export default User;
