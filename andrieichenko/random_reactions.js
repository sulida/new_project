db.reactions.aggregate([
    { $sample: { size: 2 } }
])