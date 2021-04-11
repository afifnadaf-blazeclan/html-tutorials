var EmployeeLogic = function(){
    this.departments = ['IT','HRD', 'ACCOUNTS','SALES', 'TRAINING'];
   
    this.employess = [
        {EmpNo:101, EmpName:"Mahesh", DeptName:"IT", Salary:80000},
        {EmpNo:102, EmpName:"Tejas", DeptName:"SALES", Salary:60000},
    ];
    
    this.addEmployee = function(emp){
        if(!this.isEmployeePresent(emp.EmpNo)){
            this.employess.push(emp);
            return this.employess;
        }
    };

    this.isEmployeePresent = function(emp){
        for (let index = 0; index < this.employess.length; index++) {
            var element = this.employess[index];
            if (element.EmpNo == emp ) {
                return true;
            }            
        }
        return false;
    };

    this.deletedEmp = function(itemId){
        for (let index = 0; index < employees.length; index++) {
            const emp = employees[index];
            if (emp.EmpNo == itemId) {
                console.log('item found');
                employees.splice(index,1);
                return employees;
            }
        }
    }

    this.updateEmployee = function(updateEmp, empId){
        if (this.isEmployeePresent(empId)) {
            for (let index = 0; index < employees.length; index++) {
                const emp = employees[index];
                if (emp.EmpNo == empId) {
                    console.log('item found');
                    this.employess[index].EmpName = updateEmp.EmpName;
                    this.employess[index].Salary = updateEmp.Salary;
                    this.employess[index].DeptName = updateEmp.DeptName;
                    return employees;
                }
            }
        }else{
            alert('Employee ID '+empId+' not present.');
        }
        
    }

    
    this.getEmployees = function(){
        return this.employess;
    };
};