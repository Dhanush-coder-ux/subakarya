import React, { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";


export type BottomSheetRef = {
  open: () => void;
  close: () => void;
};

type Props = {
  children: React.ReactNode;
  snapPoints?: string[];
};

const AppBottomSheet = forwardRef<BottomSheetRef, Props>(
  ({ children, snapPoints = ["25%", "60%"] }, ref) => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    const points = useMemo(() => snapPoints, [snapPoints]);

    // ✅ Expose open & close methods
    useImperativeHandle(ref, () => ({
      open: () => bottomSheetRef.current?.expand(),
      close: () => bottomSheetRef.current?.close(),
    }));

    return (
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={points}
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: "#fff" }}
      >
        <BottomSheetView className="flex-1 px-4 py-2">
          {children}
        </BottomSheetView>
      </BottomSheet>
    );
  }
);

export default AppBottomSheet;
