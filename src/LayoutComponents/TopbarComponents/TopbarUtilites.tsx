"use client";
import Image from "next/image";
import Seperation from "./Seperation";
import Link from "next/link";
import { useState } from "react";
import Notifications from "./Notifications";

const TopbarUtilites = () => {
  const [showNotification, setShowNotification] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-4">
      {showNotification && <Notifications />}
      <Image
        onClick={() => setShowNotification((prev) => !prev)}
        className="cursor-pointer"
        src="/notification.svg"
        alt="Notification icon"
        width={38}
        height={38}
      />
      <Seperation height="h-[30px]" />
      <Image src="/shop.svg" alt="Shop icon" width={38} height={38} />
      <Seperation height="h-[30px]" />
      <Link href="/login">
        <Image src="/user.svg" alt="User icon" width={38} height={38} />
      </Link>
    </div>
  );
};

export default TopbarUtilites;
