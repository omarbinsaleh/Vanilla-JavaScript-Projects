export default class myOTP {
   constructor() {
      this.otp = Math.floor(1000 + Math.random() * 9000);
   }

   getOTP() {
      return this.otp;
   }

   setOTP(newOTP) {
      this.otp = newOTP || Math.floor(1000 + Math.random() * 9000);
   }
}
