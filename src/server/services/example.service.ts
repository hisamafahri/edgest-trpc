import { GetGreetResponse } from "../schemas/example.schema";

export class ExampleService {
  async greet(): Promise<GetGreetResponse> {
    return { message: "Return from API" };
  }
}
