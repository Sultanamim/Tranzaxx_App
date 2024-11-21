import * as SecureStore from 'expo-secure-store';

export async function getToken(key) {
  try {
    const item = await SecureStore.getItemAsync(key);
    return item || null;
  } catch (error) {
    console.error(`SecureStore get item error for key "${key}":`, error);
    await SecureStore.deleteItemAsync(key);
    return null;
  }
}

export async function saveToken(key, value) {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.error(`SecureStore save item error for key "${key}":`, error);
  }
}

export async function deleteToken(key) {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error(`SecureStore delete item error for key "${key}":`, error);
  }
}
