import { firestore } from '../lib/firebaseconfig';

export async function doesUsernameExist(username) {
    const result = await firestore
        .collection('users')
        .where('username', '==', username)
        .get();

    return result.docs.map((user) => user.data().length > 0);
}
