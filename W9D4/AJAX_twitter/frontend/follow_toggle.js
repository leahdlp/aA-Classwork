const APIUtil = require('./api_util.js')

class FollowToggle {
    constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data("user-id");
        this.followState = this.$el.data("initial-follow-state");
        this.render();
        this.$el.on('click', this.handleClick.bind(this));
    }

    render() {
        if (this.followState === "unfollowed") {
            this.$el.prop("disabled", false);
            this.$el.text('Follow!');
        } else if (this.followState === 'followed') {
            this.$el.prop("disabled", false);
            this.$el.text('Unfollow!');
        } else if (this.followState === 'following') {
            this.$el.prop('disabled', true);
            this.$el.text('Follwing...');
        } else if (this.followState === 'unfollowing') {
            this.$el.prop('disabled', true);
            this.$el.text('Unfollwing...');
        }
    }

    handleClick(event) {
        event.preventDefault();

        const method = (this.followState === 'unfollowed' ? 'POST' : 'DELETE') 
        console.log(method);

        
        if (this.followState === "unfollowed") {
            this.followState = 'following'
            this.render();

            APIUtil.followUser(this.userId).then(() => {
                this.followState = 'followed';
                this.render();
            });
        } else if (this.followState === 'followed') {
            this.followState = 'unfollowing'
            this.render();

            APIUtil.unfollowUser(this.userId).then(() => {
                this.followState = 'unfollowed';
                this.render();
            });
        }  
    }

}

module.exports = FollowToggle;