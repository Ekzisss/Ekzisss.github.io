import { firestore } from '@/config/firebase';
import { getDocs, collection, DocumentData, CollectionReference } from 'firebase/firestore';

export interface projTypes {
  name: string;
  description: string;
  github: string;
  tags: string[];
  features: string[];
  stack: string[];
  structure: string;
  link: string;
  number: number;
}

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>;
};

export async function dbGet(collectionName: string) {
  const result: projTypes[] = [];

  const querySnapshot = await getDocs(createCollection<projTypes>(collectionName));
  querySnapshot.forEach((doc) => {
    const data = doc.data();

    result.push(data);
  });

  return result;
}
