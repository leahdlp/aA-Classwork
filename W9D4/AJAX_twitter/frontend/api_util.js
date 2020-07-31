const APIUtil = {
    followUser: id => {
        $.ajax({
            method: 'POST',
            url: `/users/${id}/follow`,
            dataType: 'JSON'
        })
    },

    unfollowUser: id => {
        $.ajax({
            method: 'DELETE',
            url: `/users/${id}/follow`,
            dataType: 'JSON'
        })
    }
};

module.exports = APIUtil;
