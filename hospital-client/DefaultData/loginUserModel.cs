using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace hospital_client.DefaultData
{
    public class loginUserModel
    {
        [Required]
        public string email { get; set; }

        [Required]
        public string password { get; set; }

        [Display(Name = "Remember me")]
        public bool rememberMe { get; set; }
    }
}
