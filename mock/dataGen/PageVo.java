package data;

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: figo
 * Date: 16-4-11
 * Time: 下午5:42
 * To change this template use File | Settings | File Templates.
 */
public class PageVo {
    private Integer total;
    private Integer page;
    private Integer pageSize;
    private List<Employee> employeeList;

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getPageSize() {
        return pageSize;
    }

    public void setPageSize(Integer pageSize) {
        this.pageSize = pageSize;
    }

    public List<Employee> getEmployeeList() {
        return employeeList;
    }

    public void setEmployeeList(List<Employee> employeeList) {
        this.employeeList = employeeList;
    }
}
