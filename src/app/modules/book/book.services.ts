import prisma from "../../shared/prisma";

const addBook = async (payload: any) => {
  const { authorEmail, data } = payload;

  console.log({ authorEmail, data });
  // authorEmail String
  // title String
  // description String
  // price Float
  // bookLength Int
  // edition Int
  // publication String
  // isbn Int

  const bookData = {
    authorEmail,
    title: data.title,
    description: data.description,
    price: data.price,
    bookLength: data.bookLength,
    edition: data.edition,
    publication: data.publication,
    isbn: data.isbn,
  };

  const addedBook = await prisma.book.create({
    data: bookData,
  });

  return addedBook;
};

export const bookServices = {
  addBook,
};
