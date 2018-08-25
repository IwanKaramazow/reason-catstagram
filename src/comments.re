let component = ReasonReact.statelessComponent("Comments");

open Belt;
open Types;

let make = (~comments, _children) => {
  ...component,
  render: _self =>
    <div className="comments">
      <div className="comments-list">
        {
          comments
          ->Belt.List.map(({id, text, from: {username}}) =>
              <div className="comment" key=id>
                <p>
                  <strong> {ReasonReact.string(username)} </strong>
                  {ReasonReact.string(text)}
                  <button className="remove-comment">
                    {ReasonReact.string({js|✖️|js})}
                  </button>
                </p>
              </div>
            )
          |> List.toArray
          |> ReasonReact.array
        }
      </div>
      <form className="comment-form">
        <input type_="text" placeholder="author" />
        <input type_="text" placeholder="comment" />
        <input type_="submit" hidden=true />
      </form>
    </div>,
};
