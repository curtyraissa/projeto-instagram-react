import { Story } from "./Story"

export const Stories = () => {
    return (
        <div className="stories">
            <Story />

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}