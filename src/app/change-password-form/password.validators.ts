import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
    static oldPasswordInvalid(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((control.value as string) === "1234") {
                    resolve(null);
                } else {
                    resolve({oldPasswordInvalid: true});
                }
            }, 1200);
        })
    }

    static passwordsShouldMatch(control: AbstractControl): ValidationErrors | null {
        let newPassword = control.get("newPassword");
        let confirmPassword = control.get("confirmPassword");

        if (newPassword?.valid && confirmPassword?.valid)
            if (newPassword?.value !== confirmPassword?.value)
                return {passwordsDontMatch: true};

        return null;
    }
}