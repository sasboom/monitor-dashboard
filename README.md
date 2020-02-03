
# Are You Here Yet?

## Setup
1. Run `npm install`
2. You may need to install `vue-cli` which can be installed globally via `npm install -g @vue/cli`.
3. Run `npm run serve`
4. Your monitor server should be running on PORT 3000

## Approach
1. The first thing I did was draw out how I wanted the UI to flow and what elements every view should have.
2. Secondly, I wrote down assumptions and questions and/or decisions I made regarding certain features (for instance: edit/delete).
3. Thirdly, I wanted to use a framework I had a keen interest in. I have been experimenting with React and Vue. For this I decided to go with Vue.
4. Pagination was a difficult decision; I was thinking about going with server side pagination however, for a MVP I decided it would be easier to go with client side pagination for now. That said given some more time modifying the datatable to offload the pagination to the server should not be too difficult of a task.
5. Finally, styling... I am no design guru, so I went with Bootstrap to do a lot of the heavy lifting for me.

## Given more time
### 1 Day
Given one more day I would love to style the datatable to look more presentable and also attempt to move pagination to the server.
### 1 Month
Given one more month to work on this I would like to complete the above but also break certain views down into smaller reusable components. Some of the view files have a lot of repeated html code (example: the status view's modals) which are great candidates for being their own component. Also adding a testing framework would be great. Finally, making the application mobile friendly would be another goal to complete within a month.