angular.module('todo-app')
    .run(function($rootScope, $state, hoodie) {
        console.log($rootScope);

        // Some how the following code does not work but it should. Fix later.

        // $rootScope.$on('$stateChangeStart', function(event, toState, toStateParams){
        //     console.log("username: " + hoodie.account.username)
        //     var state
        //     if (hoodie.account.username === undefined){
        //         state = 'home'
        //     } else {
        //         state = 'tasks'
        //     }
        //     if (toState.name !== state) {
        //         console.log('redirecting to ' + state);
        //         $state.transitionTo(state);
        //     }
        // })
    });
