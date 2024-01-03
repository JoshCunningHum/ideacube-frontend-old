import type { ParseArgsConfig } from "util";
import type { SessionProps, SessionQuizParams } from "~/types/Session";

export default (args: SessionProps | undefined) : args is SessionQuizParams => {
  return !!args && 'quiz_id' in args && 'class_id' in args;
}
