// "use client";
// import { Theme } from "@radix-ui/themes";
// import "./radix-ui/themes/styles.css";
// import { Theme } from "../../node_modules/@radix-ui/themes";
// import { Flex, Text, Button } from "../../node_modules/@radix-ui/themes";
// import * as Label from "@radix-ui/react-label";
import "./page.module.css";
import  "../components/test.module.css";
import  "../components/test";
// import { Popover } from "@radix-ui/react-popover"

export default function Home() {
  return (
    <div>
      {/* <Navbar className="navBar" /> */}
      <h1 className="heading1">Social Network</h1>
      {/* <Text>Hello from Radix Themes </Text>
          <Button>Let&apos;s go</Button> */}
      {/* <Label.Root />  */}

      <h1 className="text-6xl font-bol bg-red-600 underline #ef4444">Hello world!</h1>
      <navBar />
          {/* <Popover /> */}
    </div>
  );
}
