const getPriority = (type) => {

    switch (type) {

        case "Placement":
            return 3;

        case "Result":
            return 2;

        case "Event":
            return 1;

        default:
            return 0;
    }
};

const getTopNotifications = (
    notifications,
    limit = 10
) => {

    return notifications
        .sort((a, b) => {

            const priorityDiff =
                getPriority(b.Type) -
                getPriority(a.Type);

            if (priorityDiff === 0) {

                return new Date(b.Timestamp) -
                    new Date(a.Timestamp);
            }

            return priorityDiff;
        })
        .slice(0, limit);
};

module.exports = {
    getTopNotifications
};