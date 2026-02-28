import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SignUpImage from "@/assets/SignUp.png"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

export function SignUpPage({ className, ...props }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div
        className={cn("w-full max-w-5xl flex flex-col gap-6", className)}
        {...props}
      >
        <Card className="overflow-hidden p-0 shadow-xl">
          <CardContent className="grid p-0 md:grid-cols-2">
            
            {/* LEFT FORM */}
            <form className="p-6 md:p-8">
              <FieldGroup className="space-y-6">
                
                <div className="text-center space-y-2">
                  <h1 className="text-2xl font-bold">
                    Create your account
                  </h1>
                  <p className="text-muted-foreground text-sm">
                    Enter your email below to create your account
                  </p>
                </div>

                {/* EMAIL */}
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                  <FieldDescription>
                    We'll never share your email.
                  </FieldDescription>
                </Field>

                {/* PASSWORD GRID (FIXED) */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  
                  <Field>
                    <FieldLabel htmlFor="password">
                      Password
                    </FieldLabel>
                    <Input
                      id="password"
                      type="password"
                      required
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Confirm Password
                    </FieldLabel>
                    <Input
                      id="confirm-password"
                      type="password"
                      required
                    />
                  </Field>

                </div>

                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>

                {/* SUBMIT BUTTON */}
                <Button type="submit" className="w-full">
                  Create Account
                </Button>
                <FieldDescription className="text-center">
                  Already have an account?{" "}
                  <Link to="/login" className="underline">
                    Sign in
                  </Link>
                </FieldDescription>

              </FieldGroup>
            </form>

            {/* RIGHT IMAGE */}
            <div className="relative hidden md:block">
              <img
                src={SignUpImage}
                alt="Sign up visual"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

          </CardContent>
        </Card>

        <FieldDescription className="text-center text-xs">
          By clicking continue, you agree to our{" "}
          <Link to="/terms" className="underline">Terms</Link> and{" "}
          <Link to="/privacy" className="underline">Privacy Policy</Link>.
        </FieldDescription>
      </div>
    </div>
  )
}