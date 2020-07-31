const FollowToggle = require("./follow_toggle.js");

$(() => {
    const button = $("button.follow-toggle");
    button.each((i, button) => new FollowToggle(button));
    // const t = FollowToggle(button);
    window.followToggle = FollowToggle;
    window.button = button;
});