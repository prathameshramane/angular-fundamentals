import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ChangePasswordFormValidators {
    static validateOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value != "1234")
                    resolve({ invalidOldPassword: true })
                else
                    resolve(null)
            }, 2000);
        })
    }

    static confirmNewPassword(control: AbstractControl): ValidationErrors | null {
        const newPassword = control.get("newPassword")?.value;
        const confirmPassword = control.get("confirmPassword")?.value;
        if (newPassword != confirmPassword)
            return { confirmNewPassword: true }
        return null
    }
}