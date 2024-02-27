import React from "react";
import { ActionType } from "@mrgnlabs/marginfi-v2-ui-state";

import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";
import { IconBolt, IconSparkles } from "~/components/ui/icons";

import { RepayType } from "../ActionBox";

interface ActionBoxHeaderProps {
  actionType: ActionType;
  repayType?: RepayType;
  changeRepayType: (repayType: RepayType) => void;
}

export const ActionBoxHeader = ({
  actionType,
  repayType = RepayType.RepayRaw,
  changeRepayType,
}: ActionBoxHeaderProps) => {
  return (
    <>
      {actionType === ActionType.Repay ? (
        <div className="w-full flex flex-col items-center mb-6">
          <ToggleGroup
            type="single"
            size="lg"
            value={repayType}
            onValueChange={(value) => changeRepayType(value as RepayType)}
            className="w-4/5"
          >
            <ToggleGroupItem value={RepayType.RepayRaw} aria-label="Repay raw" className="w-1/2 text-xs">
              {RepayType.RepayRaw}
            </ToggleGroupItem>
            <ToggleGroupItem value={RepayType.RepayCollat} aria-label="Repay collat" className="w-1/2 text-xs gap-1.5">
              <IconSparkles size={16} />
              {RepayType.RepayCollat}
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};