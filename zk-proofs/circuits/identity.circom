pragma circom 2.0.0;

template IdentityVerification() {
    signal input name;
    signal input idNumber;
    signal output valid;

    valid <== name + idNumber;
}

component main = IdentityVerification();
