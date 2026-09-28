import { Button } from "@/components/ui/button";
import { getMe } from "@/service/getMe";

export default async function Home() {
  console.log("Root route");
  const user = await getMe();
  console.log(user);
  return (
    <div>
      <h1 className="text-center py-3 font-medium">Hello Next</h1>
      <Button size={"xs"} variant={"destructive"}>
        Click Me
      </Button>
    </div>
  );
}
