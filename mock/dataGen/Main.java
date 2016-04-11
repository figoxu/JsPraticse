package data;

import cn.mpush.common.GsonInstance;
import cn.mpush.mock.restApi.old.FileReadWriteHelper;

import java.util.ArrayList;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: figo
 * Date: 16-4-11
 * Time: 下午5:36
 * To change this template use File | Settings | File Templates.
 */
public class Main {

    public static void main(String[] args) {
        List<Employee> employeeList = new ArrayList<Employee>();

        int total = 153;
        int pageSize = 10;
        Integer page = 1;
        for(Long i=0L;i<total;i++){
            Employee employee = new Employee();

             Long id= i+1;
             String img = "/img/"+i+".jpg";
             String name = "姓名"+i;
             String desc = "描述"+i;

            employee.setId(id);
            employee.setImg(img);
            employee.setName(name);
            employee.setDesc(desc);
            employeeList.add(employee);
            if( i%pageSize==0 && i!=0 ){
                PageVo pageVo = new PageVo();
                pageVo.setTotal(total);
                pageVo.setEmployeeList(employeeList);
                pageVo.setPage(page);
                pageVo.setPageSize(pageSize);
                writeFiles(pageVo);
                employeeList = new ArrayList<Employee>();
                page++;
            }
        }
        if(employeeList.size()>0){
            PageVo pageVo = new PageVo();
            pageVo.setTotal(total);
            pageVo.setEmployeeList(employeeList);
            pageVo.setPage(page);
            pageVo.setPageSize(pageSize);
            writeFiles(pageVo);
        }
    }

    private static void writeFiles(PageVo pageVo) {
        String json = GsonInstance.instance().toJson(pageVo);
        FileReadWriteHelper.appendFile("D:/figo/workspace_mpush/workspace_java/MPushTestTool/src/main/java/data/"+pageVo.getPage()+".json",json);
    }


}
