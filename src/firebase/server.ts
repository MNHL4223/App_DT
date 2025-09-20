import { db } from "./config";
import { auth } from "./config";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  query,
  where,
  limit as limitQuery,
  doc,
  updateDoc as firestoreUpdateDoc,
  deleteDoc as firestoreDeleteDoc,
} from "firebase/firestore";
type Condition = {
  field: string;
  op: "==" | "!=" | ">" | "<" | "array-contains";
  value: any;
};

type Query = {
  collectionName: string;
  conditions?: Condition[];
  limit?: number;
};

const createDoc = async ({
  collectionName,
  data,
}: {
  collectionName: string;
  data: any;
}) => {
  const ref = collection(db, collectionName);
  const docRef = await addDoc(ref, data);
  const doc = await getDoc(docRef);
  return { id: doc.id, ...data };
};

const readDocs = async ({ collectionName, conditions = [], limit }: Query) => {
  let q = query(collection(db, collectionName));
  for (const cond of conditions) {
    q = query(q, where(cond.field, cond.op, cond.value));
  }

  // Get total items without limit
  const toltalSnapshot = await getDocs(q);
  const totalItems = toltalSnapshot.size;

  // Apply limit if provided
  if (limit) q = query(q, limitQuery(limit));
  const snapshot = await getDocs(q);
  const items = snapshot.docs.map((doc: any) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return { items, totalItems };
};
const updateDoc = async ({
  collection,
  docId,
  data,
}: {
  collection: string;
  docId: string;
  data: Partial<any>;
}) => {
  const ref = doc(db, collection, docId);
  await firestoreUpdateDoc(ref, data);
  const updated = await getDoc(ref);
  return { id: updated.id, ...updated.data() };
};

const deleteDoc = async (collection: string, docId: string) => {
  await firestoreDeleteDoc(doc(db, collection, docId));
  return { success: true, id: docId };
};
export { deleteDoc, updateDoc, createDoc, readDocs };
