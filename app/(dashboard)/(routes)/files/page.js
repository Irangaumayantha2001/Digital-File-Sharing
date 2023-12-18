/** @format */

import React from "react";
import { UserButton } from "@clerk/nextjs";

function Files() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      Files
    </div>
  );
}

export default Files;
