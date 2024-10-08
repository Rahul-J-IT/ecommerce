class APIFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        // Ensure the keyword is pulled from this.queryStr
        let keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword, // Use this.queryStr.keyword instead of this.query.keyword
                $options: 'i'
            }
        } : {};

        this.query = this.query.find({ ...keyword });
        return this;
    }


    filter(){
        const queryStrCopy = {...this.queryStr }
        //before
        // console.log(queryStrCopy)

        //removing fields from query
        const removeFields = ['keyword','limit','page']
        removeFields.forEach(field => delete queryStrCopy[field])

        //after
        // console.log(queryStrCopy)
        let queryStr = JSON.stringify(queryStrCopy)
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)/g,match => `$${match}`)

        this.query.find(JSON.parse(queryStr))

        

        return this

    }
    paginate(resPerPage){
            const currentPage = Number(this.queryStr.page) || 1
            const skip = resPerPage * (currentPage - 1)
            this.query.limit(resPerPage).skip(skip)
            return this
    }
}

module.exports = APIFeatures;




