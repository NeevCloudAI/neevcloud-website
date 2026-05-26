import Image from "next/image";

const ModelsSectionPanelLogo = () => {
  return (
    <div className="absolute bottom-0 right-0 pointer-events-none select-none opacity-15">
      <Image
        src="/icons/logo.svg"
        alt=""
        aria-hidden="true"
        width={170}
        height={170}
        style={{ filter: "brightness(0)" }}
      />
    </div>
  );
};

export default ModelsSectionPanelLogo;
