
         事件流（事件模型）：
         当用户操作页面的时候，执行捕获和冒泡的过程就叫事件流

         冒泡：
         从目标起由下而上（祖先节点上冒）直到window止的这个过程就叫冒泡

         捕获:
         由上而下，从window起到目标点止，这个过程就叫捕获。

         阻止冒泡：
         非标准的，所有浏览器都支持
         ev.cancelBubble = true

         标准的
         ev.stopPropagation()

         阻止浏览器默认行为：

         带on的事件使用 ：return false
         事件绑定使用:ev.preventDefault();

         事件绑定：
         addEventListener(不带on的事件名,函数,是否捕获[false])

         解除事件绑定:
         removeEventListener(不带on的事件名,函数,是否捕获[false])
