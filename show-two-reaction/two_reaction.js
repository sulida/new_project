db.reactions.aggregate([
    {
        $sample: {size : 2}
    },
    {
        $project: {_id:0, value:1}
    }
])
