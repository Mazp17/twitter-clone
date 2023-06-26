import { FunctionComponent } from "react";

interface AvatarProps {
    width?: number;
}

const Avatar: FunctionComponent<AvatarProps> = ({width = 8}) => {
    return (
        <span
            style={{ backgroundImage: "url(https://unavatar.io/twitter/miza1712)" }}
            className={`bg-cover rounded-full bg-center w-${width} h-${width}`}
        ></span>
    );
}

export default Avatar;