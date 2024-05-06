db.reactions.aggregate([
    { $sample: { size: 2 } },
    { $project: { value: 1, _id: 0 } }
])