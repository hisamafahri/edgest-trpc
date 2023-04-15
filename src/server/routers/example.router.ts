import { ExampleService } from "../services/example.service";
import { procedure, router } from "../trpc";

const service = new ExampleService();

export const exampleRouter = router({
  greet: procedure.query(async () => {
    const result = await service.greet();
    return result;
  }),
});
