class Apifeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  filter() {
    const excludeFields=['page','pageSize']
    const querObj={...this.queryStr}
    excludeFields.forEach((el)=>{
        delete querObj[el]
    })
    this.query=this.query.find(querObj)
    return this;
  }
  paginate() {
    const page=this.queryStr.page*1 || 1
    const pageSize=this.queryStr.pageSize*1 || 5
    const skip=(page-1)*pageSize
    this.query=this.query.skip(skip).limit(pageSize)

    return this;
  }
}

module.exports = Apifeatures;
