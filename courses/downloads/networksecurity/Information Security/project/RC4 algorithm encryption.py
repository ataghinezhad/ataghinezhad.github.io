def rc4(key, plaintext):
    S = list(range(256))
    T=list(range(256))
    j = 0
    keylen=len(key)
    for i in range(256):
        T[i]=key[i % keylen]
    # Initial Permutation of S


    for i in range(256):
        j = (j + S[i] + T[i]) % 256
        S[i], S[j] = S[j], S[i]  #Swap(S[i], S[j])
        

    # Pseudo-random generation algorithm
    i = 0
    j = 0
    ciphertext = []

    for char in plaintext:
        i = (i + 1) % 256
        j = (j + S[i]) % 256
        S[i], S[j] = S[j], S[i]
        t=(S[i] + S[j]) %256
        k = S[t]
        # The ord() function returns the number representing the unicode code of specified characte.
        ciphertext.append(chr(ord(char) ^ k))

    return ''.join(ciphertext)

# Example usage
key = b'Key'  # Replace this with your own key
plaintext = "Hello, RC4!"  # Replace this with your own plaintext
print("key:",key)
print("plaintext:",plaintext)
encrypted_text = rc4(key, plaintext)
print("Encrypted:", encrypted_text)

decrypted_text = rc4(key, encrypted_text)
print("Decrypted:", decrypted_text)
