
const Tags = function (props) {
    let totalTags = props.Tags.length;
   
    const tags = [];            
    for (let i = 0; i < totalTags; i++) {
        tags.push(<p className="tag" key={props.host+i+"Tag"}>{props.Tags[i]}</p>);
    }        

    return tags;
}
export default Tags;