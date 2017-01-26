angular.module("sesApp", ["ngResource"])
    .controller("sesCtrl", function ($scope, sesEmailService) {
        $scope.toggles = {
            success: false,
            error: false
        };

        $scope.form = {
            name: "",
            email: "",
            subject: "",
            message: ""
        };

        $scope.submitForm = function () {
            $scope.toggles = {
                success: false,
                error: false
            };

            sesEmailService.sendMail(form).then(function (response) {
                $scope.toggles.success = true;
            }).catch(function (error) {
                $scope.toggles.error = true;
            });
        };
    })
    .service("sesEmailService", function ($resource) {
        function __sendMail(mail) {
            $resource("url", {
                name: "@name",
                subject: "@subject",
                email: "@email",
                message: "@message"
            });

            return $resource.POST({
                name: mail.name,
                subject: mail.subject,
                email: mail.email,
                message: mail.message
            });
        }

        return {
            sendMail: __sendMail
        }
    });