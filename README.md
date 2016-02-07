## zMessage
### [Link Download](https://github.com/ngocquyhoang/zMessage/archive/ngocquyhoang.zip)
### @ Easy to use
#### Step 1 : Add zMessage.js script file
`<script src="./zMessage.js" type="text/javascript" ></script>`
#### Step 2 : Using zMessage to show your notification
`zMessage({
message: "Your notification here",
time: 3000,
type: "success",
});`
#### Step 3 : Must add keyframe to CSS

`@-webkit-keyframes zHide {
from {left: 0px;} to {left: 22em;}
}`

`@keyframes zHide {
from {left: 0px;} to {left: 22em;}
}`

`@-webkit-keyframes zShow {
from {left: 22em;} to {left: 0em;}
}`

`@keyframes zShow {
from {left: 22em;} to {left: 0em;}
}`

### @ More options

type : String, There are 3 types of messages "success" , "error" and "warning".

message : String

Note: You can using < br / > in content : "Lorem < br / > Ipsum".

time : Time display message. Default value : 2500.

### @ CSS

You cant using CSS for message element. Example :

`#zmessage ul li{ padding: 8px 16px; margin: 8px 0; max-width: 18em; };`

[Github : @ngocquyhoang/zMessage](https://github.com/ngocquyhoang/zMessage)
