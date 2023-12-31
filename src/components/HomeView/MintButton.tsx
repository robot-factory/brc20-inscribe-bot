import React, { FC, useCallback } from "react";
import { useRouter } from "next/navigation";
import Button from "@/ui/Button";
import useToast from "@/hooks/useToast";
import { useTranslation } from "react-i18next";

interface Props {
  tick: string;
  limit: string;
  protocol: string;
  text: string;
}
const MintButton: FC<Props> = ({ tick, limit, text, protocol }) => {
  const { t } = useTranslation("home");
  const toast = useToast("error");
  const router = useRouter();

  const handleMint = useCallback(async () => {
    if (localStorage.getItem("localWallet")) {
      router.push(
        `/inscribe?tick=${tick}&amt=${Number(limit)}&protocol=${protocol}`
      );
    } else {
      toast(t("home.pleaseSetUpWallet"));
      router.push("/wallet");
    }
  }, [router, tick, limit, protocol, toast, t]);
  return (
    <Button
      theme="outline"
      text={text}
      className="py-0 px-3 text-sm"
      onClick={handleMint}
    />
  );
};

export default MintButton;
