import { procedure, router } from "../trpc";

export const exampleRouter = router({
  greet: procedure.query(() => {
    return {
      message: "Return from API",
    };
  }),
});
