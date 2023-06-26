import React from "react";
import Avatar from "../Avatar";

interface TweetProps {
    
}
 
interface TweetState {
    
}
 
class Tweet extends React.Component<TweetProps, TweetState> {
    render() { 
        return (
            <article className="py-2 px-4 border-b border-zinc-700 inline-flex">
                <Avatar width={10}></Avatar>
            </article>
        );
    }
}
 
export default Tweet;