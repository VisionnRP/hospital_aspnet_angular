using AutoMapper;
using hospital_client.DefaultData;
using hospital_client.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hospital_client.Controllers
{
    [Route("api/accounts")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public AccountsController(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;

        }
        [HttpPost("Registration")]
        public async Task<UserForRegistrationDto> RegisterUser([FromBody] UserForRegistrationDto userForRegistration)
        {
            //if (userForRegistration == null || !ModelState.IsValid)
            //    Console.WriteLine(ModelState.IsValid);
            //    return null;

            User user = new User { Email = userForRegistration.Email, UserName = userForRegistration.Email };
            var result = await _userManager.CreateAsync(user, userForRegistration.Password);
            Console.WriteLine("result");
            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, isPersistent: false);
                return userForRegistration;
            } else
            {
                return null;
            }
        }

        [HttpGet("Logout")]
        public async Task<LogoutModel> Logout()
        {
            await _signInManager.SignOutAsync();
            return null;
        }

        [HttpPost("Login")]
        public async Task<loginUserModel> Login(loginUserModel model)
        {
           
                var result = await _signInManager.PasswordSignInAsync(
                    model.email, model.password, model.rememberMe, false);
            Console.WriteLine(result);

            if (result.Succeeded)
                {
                    return model;
                }

                ModelState.AddModelError(string.Empty, "Invalid Login Attempt");
            

            return null;
        }
    }
}
