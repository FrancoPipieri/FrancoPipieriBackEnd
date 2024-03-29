export default class MongoDao {
  constructor(collection) {
    this.collection = collection;
  }

  async create(documentToCreate) {
    try {
      const createdDocument = await this.collection.create(documentToCreate);

      return createdDocument;
    } catch (err) {
      console.log("Error creating document", err);
    }
  }

  async update(filter, updateData) {
    try {
      const updatedDocument = await this.collection.updateOne(filter, updateData);
      console.log(updatedDocument);
      return updatedDocument;
    } catch (err) {
      console.log("Error updateing document", err);
    }
  }

  async getAll() {
    try {
      const allDocuments = await this.collection.find();

      return allDocuments;
    } catch (err) {
      console.log("Error getting all documents", err);
    }
  }

  async getById(id) {
    try {
      const document = await this.collection.findById(id);

      return document;
    } catch (err) {
      console.log("Error getting document by id", err);
    }
  }

  async getByFilter(filters) {
    try {
      const document = await this.collection.findOne(filters).lean();

      return document;
    } catch (err) {
      console.log("Error getting document by filters", err);
    }
  }

  async delete(id) {
    try {
      const deletedDocument = await this.collection.deleteOne(id);

      return deletedDocument;
    } catch (err) {
      console.log("Error creating document", err);
    }
  }
}
