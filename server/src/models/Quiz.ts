import { prop, getModelForClass } from "@typegoose/typegoose";
import type { TQuestion, IStudent } from "@/lib/types";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

export class TQuiz extends TimeStamps {
  @prop({ required: true })
  public title!: String;

  @prop()
  public duration?: Number;

  @prop()
  public questions!: TQuestion[];

  @prop()
  public participants?: IStudent[];

  @prop()
  public availability?: {
    from: Date;
    to: Date;
  };
}

const Quiz = getModelForClass(TQuiz);
export default Quiz;
